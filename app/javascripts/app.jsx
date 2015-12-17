// This makes ReactRouter more consumable.
window.DefaultRoute = ReactRouter.DefaultRoute;
window.Link = ReactRouter.Link;
window.Route = ReactRouter.Route;
window.Router = ReactRouter.Router;
window.IndexRoute = ReactRouter.IndexRoute;


//Bootstap-react
window.Glyphicon = ReactBootstrap.Glyphicon;
window.Panel = ReactBootstrap.Panel;
window.ButtonToolbar = ReactBootstrap.ButtonToolbar;
window.Button = ReactBootstrap.Button;
window.Label = ReactBootstrap.Label;
window.Input = ReactBootstrap.Input;
window.Table = ReactBootstrap.Table;
window.Modal = ReactBootstrap.Modal;
window.Alert = ReactBootstrap.Alert;
window.Navbar = ReactBootstrap.Navbar;
window.NavItem = ReactBootstrap.NavItem;
window.Nav = ReactBootstrap.Nav;
window.NavDropdown = ReactBootstrap.NavDropdown;
window.MenuItem = ReactBootstrap.MenuItem;


var NavBar = React.createClass({
  render: function() {
    return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">doyFe dApp</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
        {this.props.children}
        </div>
      </div>
    );
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        (dashboard to be included)
      </div>
    );
  }
});



window.onload = function() {
  web3.eth.getCoinbase(function(error, coinbase) {
    if (error != null) {
      alert("Couldn't get coinbase! Is your client running?");
      return;
    };

    ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />

      </Route>
    </Router>
    ), document.getElementById('root'))
  });
};
