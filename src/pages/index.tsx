import Link from 'next/link';

import {
  Container,
  Header,
  SubHeader,
  LogoSection,
  Icon,
  CompanyName,
  NavbarContainer,
  ActionsContainer,
  LoginButton,
  SignUpButton,
  TitleContainer,
  Title,
  Subtitle,
  ImageContainer,
  Image,
  NewsLetterContainer,
  Label,
  Input,
  InputContainer,
  SubmitButton,
} from '../styles/home';

const Home = () => {
  return (
    <Container>
      <Header>
        <LogoSection>
          <Icon>B</Icon>
          <CompanyName>Brand</CompanyName>
        </LogoSection>

        <NavbarContainer>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Podcast</Link>
          <Link href="/">About us</Link>
          <Link href="/">Contact</Link>
        </NavbarContainer>

        <ActionsContainer>
          <LoginButton>Sign In</LoginButton>
          <SignUpButton>Sign Up</SignUpButton>
        </ActionsContainer>
      </Header>

      <SubHeader>
        <TitleContainer>
          <Title>The Lastest Trends In Yout Inbox Every Week</Title>

          <Subtitle>
            Our trend team sends Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas omnis
            accusantium vel ut, nemo deleniti est distinctio nam maxime excepturi corporis rem quod, minima, recusandae
            magni mollitia molestias debitis!
          </Subtitle>

          <NewsLetterContainer>
            <Label>Join our newsletter</Label>
            <InputContainer>
              <Input />
              <SubmitButton>Subscribe</SubmitButton>
            </InputContainer>
          </NewsLetterContainer>
        </TitleContainer>

        <ImageContainer>
          <Image />
        </ImageContainer>
      </SubHeader>
    </Container>
  );
};

export default Home;
