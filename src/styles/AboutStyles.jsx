import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;
export const TimelineSection = styled.section`
  background-color: rgba(var(--primary-darkColor));
  color: rgba(var(--primary-lightColor));
  padding: 1rem 0;
`;
export const ContactSection = styled.section`
  background-color: rgba(var(--secondary-darkColor));
  color: rgba(var(--secondary-lightColor));
  padding: 1rem 0;
`;
export const IntroductionSection = styled.section`
  margin: auto;
  width: 75%;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(var(--primary-lightColor));
  color: rgba(var(--primary-darkColor));
  width: 60%;
  margin: auto;
  box-shadow: 0 0 10px 1px white;

  @media (width < 767px) {
    width: 90%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(var(--primary-darkColor));
  color: rgba(var(--secondary-lightColor));
  align-items: center;
  width: 40%;
  padding: 4rem 2rem;
  margin-right: 0.25rem;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0.25rem;
  padding: 1.5rem;
`;
export const FormHeader = styled.h3`
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-top: 0.25rem;
`;
export const FormInput = styled.input`
  padding: 0.4rem;
  border-radius: 5px;
  border: 0;
`;
export const FormTextArea = styled.textarea`
  padding: 0.4rem;
  border-radius: 5px;
  border: 0;
`;
export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  transition: 0.3s ease;
  margin: 0.75rem auto;
  font-size: 1.3rem;
  border: 0;
  width: 50%;
  padding: 0.5rem;
  border-radius: 20px;
  box-shadow: 0 0 5px 1px;
  &:not(:disabled):hover {
    background-color: rgba(var(--primary-darkColor));
    color: rgba(var(--primary-lightColor));
  }
`;

// Timeline Styles
export const CarouselContainer = styled.ul`
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  touch-action: pan-x;
  justify-content: initial;
  margin-bottom: 8px;
  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CarouselMobileScrollNode = styled.li`
  display: flex;
  min-width: ${({ final }) => (final ? `120%;` : `max-content`)};
`;
export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  max-width: 196px;
  background: rgba(var(--primary-lightColor), 0.5);
  border-radius: 3px;

  margin-left: 32px;
  min-width: 120px;
  padding: 4px;
  align-content: start;
  scroll-snap-align: start;
  overflow: visible;
  position: relative;
  height: fit-content;

  ${(props) => (props.active === props.index ? `opacity: 1` : `opacity: 0.5`)};
`;
export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 8px 0;

  @media (width < 850px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  -webkit-mask-image: none;
  margin-left: 16px;
  overflow: visible;
`;
export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media (width < 850px) {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
export const CarouselButtons = styled.div`
  width: 288px;

  display: flex;
  visibility: visible;
  margin-bottom: 48px;
`;
export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  color: white;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;
export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;
