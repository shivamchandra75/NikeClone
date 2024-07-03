import styled from "styled-components";
import Row from "./Row";

const StyledFooter = styled.footer`
  height: 15rem;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  display: grid;
  padding: 2rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Row type="horizontal">
        <div>
          <span>Resources</span>
          <p>Find a store</p>
          <p>Become a Member</p>
          <p>Send Us Feedback</p>
        </div>
        <div>
          <span>Help</span>
          <p>Get Help</p>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Returns</p>
        </div>
        <div>
          <span>Company</span>
          <p>About Nike</p>
          <p>Investors</p>
          <p>News</p>
          <p>Careers</p>
        </div>
      </Row>
      <div>© 2024 Nike, Inc. All rights reserved</div>
    </StyledFooter>
  );
}
