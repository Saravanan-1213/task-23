import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1> Pricing Table Snippet</h1>
      <Pricelist/>
     
    </div>
  );
}

function Pricelist() {
  return (
    
    <CardGroup>
    
      <Card>
      <Card.Body>
<Card.Title>FREE $0/month</Card.Title>
   <ListGroup variant="flush">
<ListGroup.Item>+ Single User</ListGroup.Item>
<ListGroup.Item>+ 5GB Storage</ListGroup.Item>
<ListGroup.Item>+ Unlimited Public Projects</ListGroup.Item>
<ListGroup.Item>+ Community Access</ListGroup.Item>
<ListGroup.Item>x Unlimited Private Projects</ListGroup.Item>
<ListGroup.Item>x Dedicated Phone Support</ListGroup.Item>
<ListGroup.Item>x Free Subdomain</ListGroup.Item>
<ListGroup.Item>x Monthly Status Reports</ListGroup.Item>        
</ListGroup>

</Card.Body>
<Button variant="primary">Button</Button>
</Card>
      <Card>
        
        <Card.Body>
          
          <Card.Title>PLUS $9/month</Card.Title>
          <ListGroup variant="flush">
        <ListGroup.Item>+ 5 Users</ListGroup.Item>
        <ListGroup.Item>+ 50GB Storage</ListGroup.Item>
        <ListGroup.Item>+ Unlimited Public Projects</ListGroup.Item>
        <ListGroup.Item>+ Community Access</ListGroup.Item>
        <ListGroup.Item>+ Unlimited Private Projects</ListGroup.Item>
        <ListGroup.Item>+ Dedicated Phone Support</ListGroup.Item>
        <ListGroup.Item>+ Free Subdomain</ListGroup.Item>
        <ListGroup.Item>x Monthly Status Reports</ListGroup.Item>        
      </ListGroup>
      
        </Card.Body>
        <Button variant="primary">Button</Button>
        
      </Card>
      <Card>
        
       
        <Card.Body>
            <Card.Title>PRO $49/month</Card.Title>
            <ListGroup variant="flush">
        <ListGroup.Item>+ Unlimited Users</ListGroup.Item>
        <ListGroup.Item>+ 150GB Storage</ListGroup.Item>
        <ListGroup.Item>+ Unlimited Public Projects</ListGroup.Item>
        <ListGroup.Item>+ Community Access</ListGroup.Item>
        <ListGroup.Item>+ Unlimited Private Projects</ListGroup.Item>
        <ListGroup.Item>+ Dedicated Phone Support</ListGroup.Item>
        <ListGroup.Item>+ Unlimited Free Subdomain</ListGroup.Item>
        <ListGroup.Item>+ Monthly Status Reports</ListGroup.Item>
        </ListGroup>
       
          </Card.Body>
          <Button variant="primary">Button</Button>
        
      </Card>
    </CardGroup>
  );
}

    
    

export default App;






        