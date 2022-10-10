# Tips
- Never specify whats worng in the login(password or username) always say that something is wrong without telling what
- The loading stuff that shows latetly is called an skeleton (react-skeleton)
- to avoid doing some annoying ../../../, add a `jsconfig.json` and add the follow code `{ "compilerOptions": { "baseUrl": "." } }` caused SSL issues tho

# Emm testing
- db acc facka72
- TODO: Dont work on the bd, firts work whit hard typen data
- TODO: Add the user.name, user.leve{} to local storage for proper UX, update if on router `index` to check there as well
- 10,30,80,110 values of the different roles
- TODO: May add max & min lenght to all inputs, may as well never not
- TODO: Remove all the default values for better UX


# DB commands
[docs to get data](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/)
[dynamic api endpoints](https://www.thisdot.co/blog/building-full-stack-react-apps-with-next-js-api-routes)
[form POST help](https://herotofu.com/solutions/guides/react-post-form-data-to-api)


## Adding roles
- use jobTest
- db.roles.insertMany([{name:"noob", value:"10", importance:"high"}, {name:"kinda cool", value:"30", importance:"higher"}, {name:"pro coder", value:"80", importance:"highest"},{name:"superstar", value:"110", importance:"somehow higher than higest"}])

## creating first user
- db.employees.insertOne({email:"my-emal@gmail.com", psw:"some encrypted thing", rol:"pro coder", name:"Jotaro Joestar", age:"27",  favMovie:"Some cool movie", bloodType:"A+"})