import { ADMIN_URL }  from '../constants'

async function newAdmin(name, phone, password, lga){

      var formData = new FormData()
      formData.append('name', name)
      formData.append('phone', phone)
      formData.append('password', password)
      formData.append('lga', lga)

      const auth = await localStorage.getItem('auth')

      try {
        const res = await fetch(ADMIN_URL, {
            method: 'POST',
            body : formData,
            headers : {
              'Authorization' : 'Token ' + auth,
            },
        })
        const message = await res.json();
        return message

      } catch (e) {
        console.log(e);
      }
    
      return false
}

export default newAdmin