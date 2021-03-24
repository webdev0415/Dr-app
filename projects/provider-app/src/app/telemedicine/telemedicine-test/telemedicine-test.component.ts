import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import NetworkTest from 'opentok-network-test-js';
import { PatientProfileService } from '../../../../../patient-profile/src/public-api';

export interface OTConTestResult {
  connected: boolean;
  videoSupported: boolean;
  audioSupported: boolean;
  connectionErr?: string;
  qualityErr?: string;
}

@Component({
  selector: 'pa-telemedicine-test',
  templateUrl: './telemedicine-test.component.html',
  styleUrls: ['./telemedicine-test.component.scss']
})
export class TelemedicineTestComponent implements OnInit {
  currentTestingStep = 1;
  error?: string;

  constructor(
    private matDialogRef: MatDialogRef<TelemedicineTestComponent>,
    private patientProfileService: PatientProfileService
  ) { }

  ngOnInit(): void {
    this.testConnection();
  }

  testConnection(): void {
    this.error = undefined;
    this.testConnectivity().then(testResult => {
      if (!testResult.videoSupported) {
        this.error = 'Video is not supported';
      } else if (!testResult.audioSupported) {
        this.error = 'Audio is not supported';
      } else {
        this.currentTestingStep += 1;
        this.error = undefined;
      }
    }).catch(error => {
      console.error('errror catch', error)
      if (error.name === 'OT_USER_MEDIA_ACCESS_DENIED') {
        this.error = 'allow';
      } else {
        this.error = error.message;
      }
    });
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

  private async testConnectivity(): Promise<OTConTestResult> {
    const { testId, testToken } = await this.patientProfileService.getTestSession().toPromise();
    const otNetworkTest = new NetworkTest(OT as any, {
      apiKey: '46656862',
      sessionId: testId,
      token: testToken
    });

    const conTestResult: OTConTestResult = {
      connected: false,
      videoSupported: false,
      audioSupported: false
    };

    try {
      await OT.getUserMedia({ videoSource: true, audioSource: false });
      this.currentTestingStep += 1;
      await OT.getUserMedia({ videoSource: false, audioSource: true });
      this.currentTestingStep += 1;

      const connectTestResults = await otNetworkTest.testConnectivity();
      console.log('OpenTok connectivity test results', connectTestResults);

      conTestResult.connected = connectTestResults.success;
      if (!conTestResult.connected) {
        throw connectTestResults.failedTests[0].error;
      }

      const qualityTestResults = await otNetworkTest.testQuality(function updateCallback(stats) {
        console.log('intermediate testQuality stats', stats);
      });
      console.log('OpenTok quality results', qualityTestResults);

      conTestResult.videoSupported = qualityTestResults.video.supported;
      conTestResult.audioSupported = qualityTestResults.audio.supported;
    } catch (e) {
      throw e;
    }

    return conTestResult;
  }

}
