import React,{Component} from 'react';
import {View, Image} from 'react-native';
import {Body, Button, Container,Content,Header,Icon,Left,Right,Text, Title, Card, CardItem, Thumbnail, Footer, FooterTab} from 'native-base';

export default class Main extends Component{
    render(){
        return(
            <Container style={{backgroundColor:'white'}}>

                {/* 1. Header 영역  */}
                <Header>
                    {/* 크게 3개의 영역으로 구성 : 자동 row방향 */}
                    <Left>
                        <Button>
                            <Icon type="FontAwesome" name="bars"></Icon>
                        </Button>
                    </Left>
                    
                    <Body>
                        <Title>Native base</Title>
                    </Body>

                    <Right></Right>
                </Header>
                {/* 2. Content 영역 */}

                <Content padder>
                    {/* 자동 스크롤뷰 */}
                    <Button warning>
                        <Text>button</Text>
                    </Button>

                    <Button info bordered>
                        <Text>button</Text>
                    </Button>

                    <Button danger block>
                        <Text>button</Text>
                    </Button>

                    <Button>
                        <Icon type="FontAwesome" name="home"></Icon>
                        <Text>home</Text>
                    </Button>


                    <Card>
                        <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://byline.network/wp-content/uploads/2018/05/cat.png'}} />
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={{uri: 'https://byline.network/wp-content/uploads/2018/05/cat.png'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon type="FontAwesome" active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon type="FontAwesome" active name="comments" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>

                </Content>

                {/* 3. Footer 영역 */}

                <Footer>
                    {/* 탭버튼 배치... */}
                    <FooterTab>
                        <Button>
                            <Text>Tab #1</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>Tab #2</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>Tab #3</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        )
    }
}