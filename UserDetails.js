// import React, { useContext, useState } from "react"
// import { UserContext } from "./provider"
// import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,SafeAreaView,StatusBar,TextInput,} from 'react-native';
// export default function UserDetails() {
//   const [nextStatus, setNextStatus] = useState("")
//   const context = useContext(UserContext)

//   const handleStatusChange = e => {
//     // e.preventDefault()
//     setNextStatus('15641')
//   }

//   const handleSubmit = e => {
//     // e.preventDefault()
//     context?.updateStatus(nextStatus)
//     setNextStatus("156156")
//   }

//   return (
//     <View>
//       <Text>Name: {context?.name}</Text>
//       <Text>Email: {context?.email}</Text>
//       <Text>Status: {context?.status}</Text>
//       <TouchableOpacity onSubmit={handleSubmit}>
//         <TextInput

//           value={nextStatus}
//           onChangeText={handleStatusChange}
//         />
//         <Text >Update status</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }