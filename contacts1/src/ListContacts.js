import React, { Component } from 'react';


class ListContacts extends Component {
    render(){
        console.log('props', this.props)
        return(
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
                    <li key={contact.id}>
                        <div
                            className='contact-avatar'
                            style={{
                                backgroundImage:'url(${contact.avatarURL})'
                            }}
                        ></div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove'></button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts