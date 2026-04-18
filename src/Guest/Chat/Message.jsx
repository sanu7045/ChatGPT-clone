import Card from "../../components/Card"

function Message() {
    return (
        <div>
            <Card className="scale-80 w-5xl h-20 flex items-center">
                <p>By messaging ChatGPT, you agree to our <u>Terms</u> and have our <u>Privacy Policy.</u><br />Don't  share sensitive info. Chats may be reviewed and used to train our models. <u>Learn more</u></p>
            </Card>
        </div>
    )
}

export default Message