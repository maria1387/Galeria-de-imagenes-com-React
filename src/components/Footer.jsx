import Title from "./Title";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
const Footer = () => {
  return (
    <div className="footer">
		<Button variant="primary" >
        Badge <Badge bg="secondary">9</Badge>
       
      </Button>
      <Title title2={"Todo los derechos reservados"} />
      
    </div>
  );
};

export default Footer;
