template {
  destination = "../../.env"
  contents = <<EOH
[SERVER]
{{- with secret "secret/GLOBAL" }}
HOST={{ .Data.data.WSGI_SERVICE_HOST }} {{ end }}
{{- with secret "secret/DEVELOPMENT/TREATMENT_ENGINE" }}
DEBUG={{ .Data.data.WSGI_SERVICE_DEBUG }}
PORT={{ .Data.data.WSGI_SERVICE_PORT }}
ENVIRONMENT=development

[LOGGING]
LOG_LEVELS={{ .Data.data.LOG_LEVELS }}

[FLAGS]
QUESTIONS={{ .Data.data.QUESTIONS_FLAG }}
INTERACTIONS={{ .Data.data.INTERATIONS_FLAG }}
CONDITIONS={{ .Data.data.CONDITIONS_FLAG }}
{{ end }}
[GRAPHDB]
{{- with secret "secret/DEVELOPMENT/GLOBAL" }}
URL={{ .Data.data.NEO4J_HOST }}
PASSWORD={{ .Data.data.NEO4J_PASSWORD }} {{ end }}
{{- with secret "secret/DEVELOPMENT/TREATMENT_ENGINE" }}
USERNAME={{ .Data.data.NEO4J_USERNAME }}


[SYMPTOMS_LU]
URL={{ .Data.data.SYMPTOMS_LU_URL }}

[PREPROCESSOR]
SERVER_URL={{ .Data.data.SYMPTOM_GROUPS_URL }}

[AWS]
LOG_BUCKET={{ .Data.data.LOG_BUCKET }}
{{ end }}
EOH
}
