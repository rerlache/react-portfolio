import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  background-color: ${(props) =>
    props.primary ? "var(--primary-darkColor)" : "var(--secondary-darkColor)"};
  color: ${(props) =>
    props.primary
      ? "var(--primary-lightColor)"
      : "var(--secondary-lightColor)"};
  margin: ${(props) => (props.nomargin ? "" : "0 auto")};
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 0;
`;
export const SectionContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;
export const SectionHeader = styled.h2`
  font-weight: 800;
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
`;
export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
`;
export const SectionDivider = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 10px;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(0deg, var(--secondary-darkColor) 0%, var(--primary-darkColor) 100%)"
      : "linear-gradient(0deg, var(--primary-darkColor) 0%, var(--secondary-darkColor) 100%)"};

  margin: ${(props) => (props.divider ? "4rem 0" : "0 auto")};
`;
