// eslint-disable-next-line
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//email regex to check email format

// eslint-disable-next-line
export default (emails) => {

  //trim will remove space for us
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false)

    if(invalidEmails.length){
      return `These emails are invalid: ${invalidEmails}`;
    }

    return;
};
