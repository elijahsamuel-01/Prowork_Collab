import { useEffect, useState } from "react";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Main>
          <Start>Project / Project Task</Start>

          <Project>Project Task ⭐</Project>
          <Detail>created at: </Detail>
          <Div>
            <Div>
              <Card>
                <Title>{/* {props[0]} */} Title</Title>
                <TaskCard>{/* {props.task} */}</TaskCard>
              </Card>
            </Div>
          </Div>
        </Main>
      </Container>
    </div>
  );
};

export default HomeScreen;

// const Div = styled.div``

const TaskCard = styled.div`
  width: 89%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  border: 1px solid silver;
  font-size: 12px;
`;

const Title = styled.div`
  margin: 10px 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid silver;
`;

const Div = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 300px;
  background-color: #f7f8f9;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid silver;
`;

const Detail = styled.div`
  color: gray;
  font-size: 12px;
  margin-bottom: 20px;
`;

const Project = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Start = styled.div`
  color: gray;
  margin-bottom: 40px;
`;

const Main = styled.div``;

const Container = styled.div`
  width: 100%;
`;
