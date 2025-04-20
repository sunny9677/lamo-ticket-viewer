import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const TicketContainer = styled.div`
  width: 600px;
  height: 180px;
  background: linear-gradient(135deg, #2980b9, #3498db);
  border-radius: 5px;
  color: white;
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const TicketHeader = styled.div`
  color: #a7e5ff;
  font-size: 14px;
  margin-bottom: 10px;
`;

const TicketNumber = styled.div`
  position: absolute;
  top: 15px;
  left: 25px;
  font-size: 14px;
  color: black;
  background: white;
  padding: 2px 10px;
  border-radius: 2px;
`;

const TicketTitle = styled.h1`
  font-size: 36px;
  margin: 10px 0;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const TicketInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  &:before {
    content: '•';
    color: #a7e5ff;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 15px;
  right: 25px;
  font-size: 18px;
  font-weight: bold;
`;

const Logo = styled.div`
  position: absolute;
  top: 15px;
  right: 25px;
  width: 60px;
  height: 60px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  text-align: center;
  line-height: 1.2;
`;

function App() {
  return (
    <PageContainer>
      <TicketContainer>
        <TicketNumber>No. 068</TicketNumber>
        <TicketHeader>부산댄스의 명문 라모애와 함께! Since 2004</TicketHeader>
        <TicketTitle>라모애클럽 정기 파티</TicketTitle>
        <InfoContainer>
          <TicketInfo>장소: 김해 불암동 체육관</TicketInfo>
          <TicketInfo>날짜: 2025년 1월 11일(토)</TicketInfo>
          <TicketInfo>시간: 11:30~16:30</TicketInfo>
        </InfoContainer>
        <Price>₩10,000</Price>
        <Logo>
          식사<br/>행운권
        </Logo>
      </TicketContainer>
    </PageContainer>
  );
}

export default App; 