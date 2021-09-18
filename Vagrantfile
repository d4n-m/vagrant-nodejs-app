# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "bento/debian-11"
  config.vm.define "node-app"
  config.vm.hostname = "node-server"
  config.vm.network "private_network", ip: "192.168.33.100"
  config.vm.provider "virtualbox" do |vb|
    vb.name = "nodejs-box"
    vb.memory = "512"
  end
  config.vm.synced_folder "./nodejs-app", "/home/vagrant/nodejs-app"
   config.vm.provision "shell", inline: <<-SHELL
     apt-get update
   SHELL
  # config.vm.provision "install-node", type: "shell", privileged: false do |s|
  #   s.path = "./install-node.sh"
  # end
  config.vm.provision "shell", inline: <<-SHELL
    cd /vagrant/nodejs-app/
    ../install.sh
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    nvm install --lts
    npm install#
    node app.js &
  SHELL
end
