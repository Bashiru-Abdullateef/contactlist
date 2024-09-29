const addArray = []
let editedIndex ;

const addContact = () => {
   //  alert('Yes i am working')
   if (names.value == '' || number.value == ' ' || emails.value == '') {
      errorMSG.innerHTML = ' Fill in the rest also'

   } else {

      errorMSG.style.display = 'none'
      table.style.display = 'block'
      const contactObject = {
         nameId: names.value,
         numberId: number.value,
         emailId: emails.value
      }
      // console.log(contactObject);
      addArray.push(contactObject)
      // console.log(contactObject);

      anonymous()
   }
}

function deleteTwo(indent) {
   let yes = confirm("Are you sure that you want to delete because this reaction is irreversible")
   if (yes === true) {
      console.log(indent);

      addArray.splice(indent, 1)
      anonymous()
   } else {
      anonymous()
   }
}
const edit=  ()=>{
   if(editedName.value == ' ' || editedNumber.value == ' ' || editedEmail.value == ''){
      alert('Fill in the the spaces ')
   }else{
      let newContactObj ={
         nameId: editedName.value ,
         numberId :editedNumber.value,
         emailId: editedEmail.value

      }
      console.log(newContactObj);
      addArray.splice(editedIndex, 1, newContactObj)
      anonymous()
      editedName.value = ''
      editedNumber.value = ''
      editedEmail.value = ''
      
   }
}

function anonymous() {
   table.innerHTML = ''


   table.innerHTML += `
         <tr>
            <td>S/N </td>
            <td>Name </td>
            <td>Phone Number </td>
            <td>Email </td>
            <td>Action </td>
         </tr>
      `
   names.value = ''
   number.value = ''
   emails.value = ''
   for (let i = 0; i < addArray.length; i++) {

      table.innerHTML += `
            <tr>
               <td>${i + 1} </td>
               <td>${addArray[i].nameId} </td>
               <td>${addArray[i].numberId}</td>
               <td>${addArray[i].emailId} </td>
               <td> 
                  <button id="delete" onclick="deleteTwo(${i})" > Delete </button>
                  <button class="Edit" data-bs-toggle="modal" data-bs-target="#exampleModal"> Edit </button>
               </td>
            </tr>
         `

   }
}