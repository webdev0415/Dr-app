FROM gitpod/workspace-full

USER gitpod

#Install Google key
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
RUN sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

# Install custom tools, runtime, etc.
RUN sudo add-apt-repository -y ppa:neovim-ppa/unstable
RUN sudo apt-get update && \
    sudo apt-get install -y zsh neovim google-chrome-stable

# Install nvm
RUN bash -c ". .nvm/nvm.sh \
             && nvm install v11.1 && nvm alias default v11.1" 

# set the zsh theme 
ENV ZSH_THEME cloud


#install NG CLI
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN npm i npm -g
RUN npm i @angular/cli -g
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
