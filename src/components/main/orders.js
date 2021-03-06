import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class OrdersComponent extends Component {

  goTo(route) {
    this.props.history.push(route);
  }

  render() {
    const orders = this.props.cart.orders;
    return (
      <div className="table-content">
        <div className="table-scroll">
          <h2 className="title">Orders</h2>
          <Grid
            style={{ width: '100%' }}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Client</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map(order => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.customer
                          ? <span style={{ color: '#3f51b5' }}>{order.customer.firstName} {order.customer.lastName}</span> : 'Without customer'}</TableCell>
                        <TableCell>{order.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
          {
            !orders.length
              ?
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs>
                  <Button variant="contained"
                    size="large" color="primary" onClick={() => { this.goTo('/pos') }}>
                    start a sale
                </Button>
                </Grid>
              </Grid> : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(withRouter(OrdersComponent));