import Friend from './Friend'

export default function FriendsList({friends}){
    return friends.map((friend)=><Friend friend={friend} key={friend.id}/>)
}