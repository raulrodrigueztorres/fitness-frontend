import * as React from 'react';
import Workout from './assets/working_out.svg';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`m-0 flex flex-row-reverse justify-evenly items-center `};
  height: 70vh;
  color: #1b1b1b;
  background: #f89d9d;
  padding: 8vh 24vh;
`;

const H1 = styled.h1`
  font: normal normal bold 6vh/8vh Inter;
  width: 51vh;
  margin-bottom: 1vh;
`;

const Paragraph = styled.p`
  ${tw`flex-wrap mt-0 mb-6 text-lg w-96`};
  font-family: Inter;
`;

const Image = styled.img`
  width: 72vh;
  height: 39.3vh;
`;

const Button = styled.a`
  ${tw`py-3 px-8 text-lg rounded-lg bg-white`};
  color: #ce3131;
  font-family: Inter;
`;

export const Hero: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Image src={Workout} alt="" />
      </div>
      <div>
        <H1>Fulfill Your Goals</H1>
        <Paragraph>
          Say hello to the new app that helps you build the body you wish to
          have! You do the hard work, we track your results and tell you how
          amazing you are.
        </Paragraph>
        <Button href="/register">
          <span>Register</span>
        </Button>
      </div>
    </Container>
  );
};
