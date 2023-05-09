import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { SocialIconContainer, SocialIcon } from "../styles/HeaderStyles";

export default function SocialIcons( {display} ) {
  if (display) {
    return (
      <SocialIconContainer>
        <SocialIcon href="https://github.com/rerlache" target="_blank">
          <FaGithubSquare />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/robin-erlacher-4ba8bb229/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="mailto:main@robinerlacher.online">
          <BiMailSend />
        </SocialIcon>
      </SocialIconContainer>
    );
  } else {
    return (<></>)
  }
}
