# redirect-3dst-to-3dstreetorg

### General pattern:
[subdomain].3d.st/[path] > www.3dstreet.org

### Specific redirects:
* 3d.st > www.3dstreet.org
* www.3d.st > www.3dstreet.org
* github.3d.st/[path] > www.3dstreet.org
* app.3d.st/[path] > www.3dstreet.org

## deployment instructions

`firebase deploy --only functions:redirect3dst`

More firebase instructions https://firebase.google.com/docs/hosting/functions
