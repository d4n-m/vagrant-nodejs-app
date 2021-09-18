# vagrant-nodejs-app
A simple app exposed by a *NodeJS* server provisioned via a *vagrant up* environment.

1. Clone the repo:

`git clone https://github.com/d4n-m/vagrant-nodejs-app.git`
	
`cd vagrant-nodejs-app/`

2. Make sure you have the latest VirtualBox Guest Addition plugin installed:

`vagrant plugin install vagrant-vbguest`

3. Setup the environment (install.sh script will install nvm, node latest & npm. Wait for npm install to finish loading JSmodules):

`vagrant up`

4. Ready! Go to http://192.168.33.100:8080/ in your favorite browser.
