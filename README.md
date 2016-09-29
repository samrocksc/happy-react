# happy-react
An easy react boiler-plate that should transcend most popular conventions.

* Any component filename is going to be camelCased with the first letter uppercase.
* `/src/index.js` is a single file setup.  Try to keep this to as few files as possible to prevent confusion during onboarding new developers.
* `/src/Common` is a base file for anything that's generic to the project.  CSS etc.
* You can also do sass loaders inside of common.
* Folders in `/src` that are going to be Containers that hold a container and their components.  The container should be the only piece of the view that touches the store.
* `/src/constants` is the location of all of the action names, so you can easily import and create new reducers quickly.

## FAQ

**Why did you make this**
Honestly....I'm not very good at counting the backslashes needed whenever I'm working on big projects so I wanted a system that would never go more than 3 folders deep to connect an element.

**Why do you use two frontend libraries?**
I use two frontend libraries because Stardust gives me a grid system that is easy to work with as well as a bootstrappy UI, and because Material-UI gives me the material design ability on the fly.  In a lot of projects now designers for some reason have decided that the two methodologies are superfluous.  This methodology allows me to cover all my frontend bases.

**Why did you use one config folder?**
One config folder is easier, if you REALLY need to start making a lot of changes I could understand creating a `router.js`, but I would hold off on that until it was absolutely necessary.

**Why don't you use multiple configs for Production and Development?**
Why would I?  If you need to control multiple environments, just create them to your specifications and then use `NODE_ENV` to control their loading.

**Why do you use one Action File folder?**
`/src/constants.js` is great because it's a single source of importing in all Reducers and makes error reporting that much less hard to understand.
