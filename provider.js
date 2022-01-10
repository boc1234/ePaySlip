import React, { useState,createContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
// const userContextTemplate = {
//   userName: "ewe",
// }
const Picture ={
    pic:'5451'
}
export const URL = "http://localhost:8080/"
export const context = createContext(0)
// export const UserContext = React.createContext(userContextTemplate)
export const PictureContext = React.createContext(Picture)




// export default function ProviderComponent({ children }) {
//   return (
//     <UserContext.Provider value={userContextTemplate}>
//       {children}
//     </UserContext.Provider>
//   )
// }



// const functionTemplate = () => {}

// const userObjectContext = {
//   name: "John Snow",
//   email: "john.snow@thewall.north",
//   status: "Winter is coming",
//   updateStatus: functionTemplate,
// }

// export const UserContext = React.createContext(userObjectContext)

// export default function ProviderComponent({ children }) {
//   const [context, setContext] = useState(userObjectContext)

//   const updateContext = (contextUpdates = {}) =>
//     setContext(currentContext => ({ ...currentContext, ...contextUpdates }))

//   useEffect(() => {
//     if (context?.updateStatus === functionTemplate) {
//       updateContext({
//         updateStatus: value => updateContext({ status: value }),
//       })
//     }
//   }, [context?.updateStatus])

//   return <UserContext.Provider value={context}>{children}</UserContext.Provider>
// }