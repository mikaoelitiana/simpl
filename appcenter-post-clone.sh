#!/usr/bin/env bash
set -ex
brew uninstall node@6
NODE_VERSION="9.10.1"
curl "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.pkg" > "$HOME/Downloads/node-installer.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"
node -v
