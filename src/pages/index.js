import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="64px 0 0 0" sm-padding="40px 0" font="--base" color="--dark">
			<Override slot="SectionContent" />
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Group%20224.png?v=2021-04-15T08:34:06.729Z) 50% 0/cover no-repeat">
						<Box background="#EBFAF3" width="134.86px" height="43.55px">
							<Text margin="0 0px 16px 22px" border-color="#36CB84" color="#36CB84" font="400 16px/45px --fontFamily-googleRoboto">
								Хит продаж
							</Text>
						</Box>
					</Box>
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								3 134р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								5 490р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 14.5px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки TANJUN
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Group%20224.png?v=2021-04-15T08:34:06.729Z) 50% 0/cover no-repeat" />
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								3 134р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								5 490р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 14.5px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки TANJUN
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Group%20224.png?v=2021-04-15T08:34:06.729Z) 50% 0/cover no-repeat" />
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								3 134р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								5 490р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 14.5px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки TANJUN
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Group%20224.png?v=2021-04-15T08:34:06.729Z) 50% 0/cover no-repeat" />
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								3 134р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								5 490р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 14.5px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки TANJUN
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0 0 10px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Override slot="SectionContent" sm-margin="-105px 21.25px 0px 21.25px" />
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://images.unsplash.com/photo-1618329254028-833d820b7f86?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat"
						border-radius="10px"
					/>
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								5 490р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								6 190р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 13px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки NIKE REVOLUTION 5 FLYEASE
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://images.unsplash.com/photo-1618329254028-833d820b7f86?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat"
						border-radius="10px"
					/>
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								5 490р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								6 190р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 13px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки NIKE REVOLUTION 5 FLYEASE
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://images.unsplash.com/photo-1618329254028-833d820b7f86?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat"
						border-radius="10px"
					/>
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								5 490р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								6 190р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 13px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки NIKE REVOLUTION 5 FLYEASE
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://images.unsplash.com/photo-1618329254028-833d820b7f86?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0/cover no-repeat"
						border-radius="10px"
					/>
					<Stack>
						{"    "}
						<StackItem display="flex" width="100%" padding="16px 16px 0 16px">
							<Override slot="StackItemContent" />
							{"        "}
							<Text as="h3" font="normal 500 24px/1.2 --fontFamily-googleRoboto" margin="2px 15px 16px 0px">
								5 490р
							</Text>
							<Text
								font="normal 300 16px/2.1 --fontFamily-googleRoboto"
								margin="0px 15px 0px 0px"
								display="inline-block"
								color="#8F8F8F"
								text-decoration-line="line-through"
								height="50% content-box"
							>
								6 190р
							</Text>
							<Box background="#FDF1E9" width="65px" height="34px" border-radius="5px">
								<Text margin="6px 0px 16px 13px" font="500 16px/24px --fontFamily-googleRoboto" color="#EC7623">
									-10%
								</Text>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="30%" display="flex">
							{"        "}{"    "}
						</StackItem>
					</Stack>
					<Text as="p" margin="-30px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#000000">
						Nike / Кроссовки NIKE REVOLUTION 5 FLYEASE
					</Text>
					<Text as="p" margin="2px 0px 16px 0px" font="300 14pt/24px --fontFamily-googleRoboto" color="#36CB84">
						Доставка завтра
					</Text>
					<Button
						background="#ffffff"
						color="#b9b9b9"
						border-width="1px"
						border-color="#e6e6e6"
						border-style="solid"
						height="59px"
						font="normal 300 18px/1.5 --fontFamily-googleRoboto"
						margin="15px 0px 0px 0px"
						border-radius="7px"
					>
						В корзину
					</Button>
				</StackItem>
			</Stack>
		</Section>
		<Section
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			width="100%"
			lg-padding="64px 0 64px 55px"
			md-padding="64px 0 64px 25px"
			padding="80px 0 24px 0"
		>
			<Override slot="SectionContent" width="1280px" />
			<Stack width="100%" margin="0 0 0 0">
				<StackItem
					width="25%"
					lg-width="30%"
					sm-width="50%"
					lg-padding="0 0 0 0"
					md-padding="16px 16px 16px 16px"
					sm-height="415px"
					sm-padding="40px 16px 16px 16px"
					padding="0px 0px 0px 0px"
					margin="0px px 0px -20px"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-padding="16px 0px 0px 0px" md-padding="0 0px 0px 0px" />
					<Text
						margin="0 10px 0px 0"
						color="rgba(140, 140, 140, 0.58)"
						font="300 16px --fontFamily-googleRoboto"
						lg-margin="0 0px 16px 0"
						sm-margin="0 0px 16px 0"
					>
						2004-2021 © Shop — модный интернет-магазин одежды, обуви{" "}
						<br />
						и аксессуаров. Все права защищены.
					</Text>
				</StackItem>
				<StackItem
					width="15%"
					lg-width="30%"
					sm-width="50%"
					sm-margin-top="24px"
					margin="0px 15px 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Text height="18px" color="#000000" font="400 16px --fontFamily-googleRoboto" margin="0 0px 16px 0px">
						Покупателям
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px">
						Как сделать заказ{"\n"}
						<br />
						<br />
						Способы оплаты{"\n"}
						<br />
						<br />
						Доставка{"\n"}
						<br />
						<br />
						Возврат товара{"\n"}
						<br />
						<br />
						Возврат денежных{" "}
						<br />
						средств{"\n"}
						<br />
						<br />
						Правила продажи{"\n"}
						<br />
						<br />
						Правила пользования{" "}
						<br />
						торговой площадкой{"\n"}
						<br />
						<br />
						Вопросы и ответы
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="30%" sm-width="50%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
						Партнерам
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px">
						Партнерская программа{"\n"}
						<br />
						<br />
						Как начать{" "}
						<br />
						сотрудничество{"\n"}
						<br />
						<br />
						Преимущества{"\n"}
						<br />
						<br />
						Франшиза{"\n"}
					</Text>
				</StackItem>
				<StackItem
					width="15%"
					lg-width="30%"
					sm-width="50%"
					sm-margin-top="24px"
					margin="0px 15px 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
						Компания
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px" width="204.95px">
						О нас{"\n"}
						<br />
						<br />
						Реквизиты{"\n"}
						<br />
						<br />
						Пресс-центр{"\n"}
						<br />
						<br />
						Контакты{"\n"}
					</Text>
				</StackItem>
				<StackItem
					width="15%"
					lg-width="30%"
					sm-width="50%"
					sm-margin-top="24px"
					margin="0px 15px 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
						Другое
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px" width="204.95px">
						Детям
						<br />
						<br />
						ЗОЖ и спорт
						<br />
						<br />
						Online журнал
						<br />
						<br />
						Перевозчикам
						<br />
						<br />
						Модный блог
						<br />
						<br />
						Энциклопедия моды
					</Text>
				</StackItem>
				<StackItem width="5%" lg-width="30%" sm-width="50%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image width="40px" height="40px" src="https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Vector.svg?v=2021-04-14T22:29:07.516Z" margin="0px 0px 16px 0px" />
					<Image width="40px" height="40px" src="https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Vector-1.svg?v=2021-04-14T22:29:07.516Z" margin="0px 0px 16px 0px" />
					<Image width="40px" height="40px" src="https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Group%20181.svg?v=2021-04-14T22:29:07.511Z" margin="0px 0px 16px 0px" />
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<StackItem />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});