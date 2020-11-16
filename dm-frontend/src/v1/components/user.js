import React  from 'react'
import {Button, Card} from 'react-bootstrap'


export const User=({user, toggleUserEdit, deleteUserButton})=>{
    return(
        <div className="userComponent" key={user.id}>
            <Card
            className={`${user.id} show`}
            bg={'dark'}
            text={'white'}
            >
                <Card.Header className={`${user.id} show`}>
                    Profile
                </Card.Header>
                <Card.Body className={`${user.id} show`}>
                    <Card.Title className={`${user.id} show`}>
                        {user.name}
                    </Card.Title>
                    <Card.Text className={`${user.id} show`}>
                        <strong>Email:</strong>{user.email}
                    </Card.Text>
                    <Button
                    variant="outline-info"
                    type='button'
                    onClick={toggleUserEdit}
                    className={`btn ${user.id} btn-toogleuserEdit`}
                    >
                        
                        Edit
                    </Button>
                    <Button
                    variant="outline-info"
                    type='button'
                    onClick={()=>deleteUserButton(user)}
                    className={`btn ${user.id} btn-userDelete`}
                    >
                        
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}