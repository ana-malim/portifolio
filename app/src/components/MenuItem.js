import React, { Component } from 'react'

export default class MenuItem extends Component {
    render () {
        return (
        <div>
            <a href>{this.props.parentToChild}</a>
            {/* {data.map(((item) => (
            
            <CardItem
              src= {img}
              _id = {item._id}
              firstName = {item.firstName}
              midInitial = {item.midInitial}
              lastName = {item.lastName}
              details = {item.details}
              birthdayDay = {item.birthdayDay}
              birthdayMonth = {item.birthdayMonth}
              birthdayYear = {item.birthdayYear}
              age = {calculateAge(item.birthdayYear) ? calculateAge(item.birthdayYear) : "not provided"}
              // TODO use the props on card items to display each property in the card
              text= {`Age: ${calculateAge("1990") ? calculateAge(item.birthdayYear) : "not provided" }
               details: ${item.details}`}
               birthday = {`Birthday: ${item.birthdayMonth}/${item.birthdayDay}`}
              label={`${item.firstName} ${item.midInitial ? item.midInitial : ""} ${item.lastName}`}
            />  
            )))} */}
             
        </div>
    )
    }
}