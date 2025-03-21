# deprecated
using native firebase hosting domain forwarding

## redirect-3dst-to-3dstreetorg

### General pattern:
[subdomain].3d.st/[path] > www.3dstreet.org/[path]

### Specific redirects:
* 3d.st > www.3dstreet.org
* www.3d.st > www.3dstreet.org
* github.3d.st/[path] > www.3dstreet.org/[path]
* app.3d.st/[path] > www.3dstreet.org/[path]

## deployment instructions

`firebase deploy --only functions:redirect3dst`

More firebase instructions https://firebase.google.com/docs/hosting/functions
