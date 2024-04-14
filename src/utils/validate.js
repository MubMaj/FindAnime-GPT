export const cheackValidData = (email, password) => {
  
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is Not Valid"
    if(!isPassValid) return "Password is Not Valid"

}