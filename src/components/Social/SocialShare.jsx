import {
  StyledAnchor,
  StyledDiv,
  StyledDivFlex,
  StyledFiFacebook,
  StyledFiLinkedin,
  StyledFiTwitter,
  StyledH2,
} from "./SocialShare.styled";

const SocialShare = () => {
  const PortfolioUrlPage = "https://example.com";

  return (
    <>
      <StyledDiv>
        <StyledH2>Share This On</StyledH2>
        <StyledDivFlex>
          <StyledAnchor
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              PortfolioUrlPage
            )}`}
            target="_blank"
          >
            <StyledFiFacebook />
          </StyledAnchor>
          <StyledAnchor
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              PortfolioUrlPage
            )}`}
            target="_blank"
          >
            <StyledFiTwitter />
          </StyledAnchor>
          <StyledAnchor
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              PortfolioUrlPage
            )}`}
            target="_blank"
          >
            <StyledFiLinkedin />
          </StyledAnchor>
        </StyledDivFlex>
      </StyledDiv>
    </>
  );
};

export default SocialShare;