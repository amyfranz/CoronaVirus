# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Advice.create(title: "When to use a mask" , content: "If you are healthy, you only need to wear a mask if you are taking care of a person with suspected 2019-nCoV infection.<br>Wear a mask if you are coughing or sneezing.<br>Masks are effective only when used in combination with frequent hand-cleaning with alcohol-based hand rub or soap and water.<br>If you wear a mask, then you must know how to use it and dispose of it properly.<br>Before putting on a mask, clean hands with alcohol-based hand rub or soap and water.<br>Cover mouth and nose with mask and make sure there are no gaps between your face and the mask.<br>Avoid touching the mask while using it; if you do, clean your hands with alcohol-based hand rub or soap and water.<br>Replace the mask with a new one as soon as it is damp and do not re-use single-use masks.<br>To remove the mask: remove it from behind (do not touch the front of mask); <br>discard immediately in a closed bin; <br>clean hands with alcohol-based hand rub or soap and water.", video: "https://youtu.be/M4olt47pr_o", image: "images/masks.jpg")
Advice.create(title: "Basic protective measures against the new coronavirus", content: "Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. <br>Take care of your health and protect others by doing the following:<br><h4>Wash your hands frequently</h4><br>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.<br><h6>Why?</h6> Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.<br>Maintain social distancing<br>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.<br><h6>Why?</h6> When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.Avoid touching eyes, nose and mouth<br><h6>Why?</h6> Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.<br><h5>Practice respiratory hygiene</h5><br>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.<br><h6>Why?</h6> Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.<br><h5>If you have fever, cough and difficulty breathing, seek medical care early</h5><br>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.<br><h6>Why?</h6> National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.<h5>Stay informed and follow advice given by your healthcare provider</h5><br>Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.<br><h6>Why?</h6> National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves.<br><h4>Protection measures for persons who are in or have recently visited (past 14 days) areas where COVID-19 is spreading</h4><br>Follow the guidance outlined above.<br>Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight runny nose, until you recover. Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.<br>If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers. Why? Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.", video: "https://youtu.be/bPITHEiFWLc", image: "images/general.jpg")
Advice.create(title: "Myth busters" , content: "<h4>COVID-19 virus can be transmitted in areas with hot and humid climates</h4><br>From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS, including areas with hot and humid weather. Regardless of climate, adopt protective measures if you live in, or travel to an area reporting COVID-19. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.<br><h4>Cold weather and snow CANNOT kill the new coronavirus.</h4><br>There is no reason to believe that cold weather can kill the new coronavirus or other diseases. The normal human body temperature remains around 36.5°C to 37°C, regardless of the external temperature or weather. The most effective way to protect yourself against the new coronavirus is by frequently cleaning your hands with alcohol-based hand rub or washing them with soap and water.<br><h4>Taking a hot bath does not prevent the new coronavirus disease</h4><br>Taking a hot bath will not prevent you from catching COVID-19. Your normal body temperature remains around 36.5°C to 37°C, regardless of the temperature of your bath or shower. Actually, taking a hot bath with extremely hot water can be harmful, as it can burn you. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.<h4>The new coronavirus CANNOT be transmitted through mosquito bites.<h4><br>To date there has been no information nor evidence to suggest that the new coronavirus could be transmitted by mosquitoes. The new coronavirus is a respiratory virus which spreads primarily through droplets generated when an infected person coughs or sneezes, or through droplets of saliva or discharge from the nose. To protect yourself, clean your hands frequently with an alcohol-based hand rub or wash them with soap and water. Also, avoid close contact with anyone who is coughing and sneezing.<br><h4>Are hand dryers effective in killing the new coronavirus?</h4><br>No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself against the new coronavirus, you should frequently clean your hands with an alcohol-based hand rub or wash them with soap and water. Once your hands are cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.<br><h4>Can an ultraviolet disinfection lamp kill the new coronavirus?</h4><br>UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation.", video: "", image: "images/Myth.jpg")

# Tag.create(name: "mask")
# Tag.create(name: "health")
# Tag.create(name: "corona info")
# Tag.create(name: "myths")
# Tag.create(name: "believe it or not")
# Tag.create(name: "general advice")

# AdviceTag.create(advice_id: 1, tag_id: 1)
# AdviceTag.create(advice_id: 1, tag_id: 2)
# AdviceTag.create(advice_id: 1, tag_id: 3)
# AdviceTag.create(advice_id: 3, tag_id: 4)
# AdviceTag.create(advice_id: 3, tag_id: 5)
# AdviceTag.create(advice_id: 3, tag_id: 3)
# AdviceTag.create(advice_id: 2, tag_id: 6)
# AdviceTag.create(advice_id: 2, tag_id: 2)
# AdviceTag.create(advice_id: 2, tag_id: 3)

Pastime.create(name: "stringfgg", content: "teqweqweqxt", title: "Quarantine Properly", summary: 'sgdjsahgfj', img_url: 'stock-image.jpg')
Pastime.create(name: "stringggg", content: "tefsdfsxt", title: "Don't Panic Buy", summary: 'sgdjsahgfj', img_url: 'panic-buy.jpg')
Pastime.create(name: "strinfddfdg", content: "tesdfsdxt", title: "Exercise Regularly", summary: 'sgdjsahgfj', img_url: 'exercise.jpg')


Rating.create(rate: 5, pastime_id: 1)
Rating.create(rate: 4, pastime_id: 3)
Rating.create(rate: 2, pastime_id: 2)
Rating.create(rate: 1, pastime_id: 2)
Rating.create(rate: 2, pastime_id: 2)