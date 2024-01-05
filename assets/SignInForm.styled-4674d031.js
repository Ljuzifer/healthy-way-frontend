import{e as s,f as e,s as a,h as i,k as t,m as o}from"./index-bab10536.js";import{a as d}from"./SignInPage.styled-9dc821cc.js";const r=/^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,l=s().shape({email:e().required("Email is required").email("Invalid email format").matches(r,"Invalid email address"),password:e().required("Password is required").min(6,"The password must be at least 6 characters long")}),p=s().shape({email:e().required("Email is required").email("Invalid email format").matches(r,"Invalid email address")}),c=s().shape({password:e().required("Password is required").min(6,"The password must be at least 6 characters long"),newPassword:e().required("Password is required").min(7,"The password must be at least 7 characters long")}),h=s().shape({password:e().required("Password is required").min(6,"The password must be at least 6 characters long")}),u=a(i)`
  margin-bottom: 52px;

  & input + input {
    margin-top: 20px;
  }

  & button {
    margin-top: 40px;
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,w=a(d)`
  display: block;
  margin-top: 20px;
  font-weight: 500;
  color: var(--grey-light);
  text-align: center;
`,g=a(t)`
  position: absolute;
  top: 26px;
  left: 10px;
`,x=a.div`
  position: relative;
`,q=a(o)`
  width: 100%;
`,F=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;export{g as E,F,u as S,x as a,q as b,w as c,c as d,h as e,p as f,l};
