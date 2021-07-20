import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  padding: 1rem;
  height: 80px;
  width: auto;
  min-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const LogoSection = styled.section`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const NavbarContainer = styled.ul`
  margin-left: 26rem;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    position: relative;
    height: 100%;
    width: 70px;
    font-size: ${({ theme }) => theme.fontSize.body.md};
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover::before {
      content: '';
      width: 100%;
      top: 0;
      position: absolute;
      border-top: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 3px;
      -webkit-transition: all 1.5s ease-in-out;
      -moz-transition: all 1.5s ease-in-out;
      -ms-transition: all 1.5s ease-in-out;
      -o-transition: all 1.5s ease-in-out;
      transition: all 1.5s ease-in-out;
    }

    &::after {
      -webkit-transition: all 1.5s ease-in-out;
      -moz-transition: all 1.5s ease-in-out;
      -ms-transition: all 1.5s ease-in-out;
      -o-transition: all 1.5s ease-in-out;
      transition: all 1.5s ease-in-out;
    }
  }
`;

export const ActionsContainer = styled.section`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const buttonStyled = css`
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.black};
  background-color: transparent;
  height: 40px;
  width: auto;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  padding: 0rem 1.2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const LoginButton = styled.button`
  ${buttonStyled};
`;

export const SignUpButton = styled.button`
  ${buttonStyled};
`;

export const SubHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80%;
  width: auto;
  min-width: 1200px;
  margin-top: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 7rem;
  width: 500px;
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;
  width: 500px;
`;

export const ImageContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img.attrs(() => ({
  src: '/images/background.jpg',
}))`
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

export const NewsLetterContainer = styled.div`
    padding: 2rem 5rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
`;

export const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
`;

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 10px;
  height: 60px;
  width: 400px;
  margin-top: 1rem;
`;

export const Input = styled.input`
  height: 100%;
  width: 265px;
  border: none;
  padding: 0rem 1rem;
  outline: none;
  border-radius: 10px 0 0 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  padding: 0rem 1rem;
  border-radius: 10px;
  border: none;
  height: 50px;
  width: 130px;
`;
