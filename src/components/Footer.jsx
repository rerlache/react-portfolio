import SocialIcons from './SocialIcons'

export default function Footer() {
//      <div>
//        <div style={{width: "20px", height: "20px",  backgroundColor: "rgba(var(--primary-darkColor))", border: "1px solid red"}} />
//        <div style={{width: "20px", height: "20px",  backgroundColor: "rgba(var(--secondary-darkColor))", border: "1px solid red"}} /> 
//        <div style={{width: "20px", height: "20px",  backgroundColor: "rgba(var(--primary-lightColor))", border: "1px solid red"}} />
//        <div style={{width: "20px", height: "20px",  backgroundColor: "rgba(var(--secondary-lightColor))", border: "1px solid red"}} />
//        <div style={{width: "20px", height: "20px",  backgroundColor: "rgba(var(--primary-accentColor))", border: "1px solid red"}} />
//      </div>
  return (
    <div style={{fontSize: "1.5rem", display: "flex", justifyContent: "space-between"}}>
      &copy; 2023
      <SocialIcons display />
    </div>
  )
}
