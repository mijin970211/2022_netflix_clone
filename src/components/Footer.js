import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
        <FooterContent>
            <FooterLinkContainer>
                <FooterLinkTitle>넷플릭스 코리아 </FooterLinkTitle>   

                <FooterLinkContent>
                    <FooterLink href="https://help.netflix.com/ko/node/214">넷플릭스 소개</FooterLink>    
                    <FooterLink href="https://help.netflix.com/ko/">고객센터</FooterLink>                  
                    <FooterLink href="https://media.netflix.com/ko/">미디어센터</FooterLink>                    
                    <FooterLink href="https://help.netflix.com/legal/termsofuse">이용 약관</FooterLink>                    
                </FooterLinkContent>
            
                <FooterDescContainer>
                    <FooterDescRights>
                        Netflix Rights Reserved
                    </FooterDescRights>
                </FooterDescContainer>
            </FooterLinkContainer>
        </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    z-index: 100;

    @media (max-width: 768px) {
        padding: 20px 20px 30px;
        position: relative; bottom: 0;
    }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
    width: 500px;

    @media (max-width: 768px) {
        width: 100%;
    }

`;

const FooterLinkTitle = styled.p`
    color: gray;
    font-size: 17px
`;

const FooterLinkContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 35px;

    @media (max-width: 768px) {
        margin-top: 26px;
    }
`;

const FooterLink = styled.a`
    color: gray;
    font-size: 14px;
    width: 110px;
    margin-bottom:21px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom:16px;
    }
`;

const FooterDescContainer = styled.div`
    margin-top: 30px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const FooterDescRights = styled.p`
    color: #fff;
    font-size: 14px;
    text-align: center;
`;

export default Footer