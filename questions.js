const questions = [
    {
        question: "Who was the first man created according to the Bible?",
        choices: ["Adam", "Abraham", "Moses", "David"],
        correctAnswer: "Adam"
    },
    {
        question: "What is the name of the river where John the Baptist baptized people?",
        choices: ["Nile", "Tigris", "Jordan", "Euphrates"],
        correctAnswer: "Jordan"
    },
    {
        question: "How many days and nights did it rain during the Great Flood?",
        choices: ["40", "7", "100", "10"],
        correctAnswer: "40"
    },
    {
        question: "Who betrayed Jesus to the authorities with a kiss?",
        choices: ["Matthew", "Judas", "Peter", "John"],
        correctAnswer: "Judas"
    },
    {
        question: "What was the name of the giant Philistine warrior defeated by a young David?",
        choices: ["Goliath", "Saul", "Jonathan", "Absalom"],
        correctAnswer: "Goliath"
    },
    {
        question: "Who was the first king of Israel?",
        choices: ["Saul", "David", "Solomon", "Samuel"],
        correctAnswer: "Saul"
    },
    {
        question: "Which prophet was swallowed by a big fish?",
        choices: ["Isaiah", "Jeremiah", "Jonah", "Ezekiel"],
        correctAnswer: "Jonah"
    },
    {
        question: "What is the name of the mountain where Moses received the Ten Commandments?",
        choices: ["Mount Sinai", "Mount Nebo", "Mount Carmel", "Mount Hermon"],
        correctAnswer: "Mount Sinai"
    },
    {
        question: "Who was known as the 'weeping prophet'?",
        choices: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
        correctAnswer: "Jeremiah"
    },
    {
        question: "Which disciple famously doubted Jesus' resurrection until he saw and touched his wounds?",
        choices: ["Peter", "Andrew", "Thomas", "James"],
        correctAnswer: "Thomas"
    },
    {
        question: "What is the shortest verse in the Bible?",
        choices: ["Jesus wept", "God is love", "The Lord is my shepherd", "I can do all things"],
        correctAnswer: "Jesus wept"
    },
    {
        question: "Who wrote the majority of the Psalms in the Bible?",
        choices: ["David", "Solomon", "Asaph", "Ezra"],
        correctAnswer: "David"
    },
    {
        question: "Which angel announced the birth of Jesus to Mary?",
        choices: ["Michael", "Gabriel", "Raphael", "Uriel"],
        correctAnswer: "Gabriel"
    },
    {
        question: "In the book of Genesis, who was sold into slavery by his brothers?",
        choices: ["Joseph", "Benjamin", "Reuben", "Judah"],
        correctAnswer: "Joseph"
    },
    {
        question: "Who wrote the Book of Revelation?",
        choices: ["Matthew", "Mark", "Luke", "John"],
        correctAnswer: "John"
    },
    {
        question: "What is the first miracle Jesus performed according to the Gospel of John?",
        choices: ["Turning water into wine", "Feeding the 5000", "Healing a blind man", "Raising Lazarus"],
        correctAnswer: "Turning water into wine"
    },
    {
        question: "Which judge of Israel defeated the Midianites with just 300 men?",
        choices: ["Gideon", "Samson", "Deborah", "Jephthah"],
        correctAnswer: "Gideon"
    },
    {
        question: "Who is often referred to as the 'Mother of Nations'?",
        choices: ["Sarah", "Rebekah", "Rachel", "Leah"],
        correctAnswer: "Sarah"
    },
    {
        question: "In which city were the disciples first called Christians?",
        choices: ["Jerusalem", "Antioch", "Rome", "Corinth"],
        correctAnswer: "Antioch"
    },
    {
        question: "What is the significance of the number 40 in the Bible?",
        choices: ["Years in the wilderness", "Days of rain during the Flood", "Number of disciples Jesus had", "Books in the Old Testament"],
        correctAnswer: "Days of rain during the Flood"
    },
    {
        question: "Who was the father of Isaac in the Bible?",
        choices: ["Abraham", "Jacob", "David", "Moses"],
        correctAnswer: "Abraham"
    },
    {
        question: "Which Old Testament character had a coat of many colors?",
        choices: ["Joseph", "Jacob", "Esau", "Isaac"],
        correctAnswer: "Joseph"
    },
    {
        question: "What is the fifth book of the New Testament?",
        choices: ["Matthew", "Mark", "Luke", "John"],
        correctAnswer: "John"
    },
    {
        question: "Which city was known as the city of David?",
        choices: ["Bethlehem", "Jerusalem", "Nazareth", "Capernaum"],
        correctAnswer: "Jerusalem"
    },
    {
        question: "Who was the mother of John the Baptist?",
        choices: ["Elizabeth", "Mary", "Anna", "Hannah"],
        correctAnswer: "Elizabeth"
    },
    {
        question: "Which disciple walked on water with Jesus?",
        choices: ["Peter", "John", "James", "Andrew"],
        correctAnswer: "Peter"
    },
    {
        question: "What was the name of the tax collector who became a disciple of Jesus?",
        choices: ["Matthew", "Mark", "Luke", "John"],
        correctAnswer: "Matthew"
    },
    {
        question: "Who was the brother of Mary and Martha in the Bible?",
        choices: ["John", "Peter", "Lazarus", "Andrew"],
        correctAnswer: "Lazarus"
    },
    {
        question: "What is the last book of the Old Testament?",
        choices: ["Malachi", "Zechariah", "Haggai", "Joel"],
        correctAnswer: "Malachi"
    },
    {
        question: "Who was the wife of King Ahab in the Old Testament?",
        choices: ["Jezebel", "Esther", "Ruth", "Athaliah"],
        correctAnswer: "Jezebel"
    },
    {
        question: "What did the Israelites eat during their time in the wilderness?",
        choices: ["Manna", "Bread", "Fish", "Dates"],
        correctAnswer: "Manna"
    },
    {
        question: "Who was the father of King Solomon?",
        choices: ["David", "Saul", "Jonathan", "Absalom"],
        correctAnswer: "David"
    },
    {
        question: "What did God create on the first day according to the book of Genesis?",
        choices: ["Light", "Animals", "Man", "Plants"],
        correctAnswer: "Light"
    },
    {
        question: "Who was the first martyr in the New Testament?",
        choices: ["Stephen", "Peter", "James", "John"],
        correctAnswer: "Stephen"
    },
    {
        question: "What was the occupation of the apostle Paul before he became a follower of Jesus?",
        choices: ["Tentmaker", "Fisherman", "Tax collector", "Pharisee"],
        correctAnswer: "Tentmaker"
    },
    {
        question: "Who was the disciple known as 'the disciple whom Jesus loved'?",
        choices: ["John", "Peter", "James", "Andrew"],
        correctAnswer: "John"
    },
    {
        question: "What is the name of the garden where Jesus prayed before his arrest?",
        choices: ["Gethsemane", "Eden", "Bethesda", "Carmel"],
        correctAnswer: "Gethsemane"
    },
    {
        question: "Which prophet saw a valley of dry bones come to life?",
        choices: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
        correctAnswer: "Ezekiel"
    },
    {
        question: "Who was the mother of King Solomon?",
        choices: ["Bathsheba", "Ruth", "Esther", "Abigail"],
        correctAnswer: "Bathsheba"
    },
    {
        question: "Which disciple denied Jesus three times before the rooster crowed?",
        choices: ["Peter", "John", "James", "Andrew"],
        correctAnswer: "Peter"
    },
    {
        question: "What was the name of the city where Jesus was born?",
        choices: ["Bethlehem", "Jerusalem", "Nazareth", "Capernaum"],
        correctAnswer: "Bethlehem"
    },
    {
        question: "Who was the prophet taken up to heaven in a chariot of fire?",
        choices: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
        correctAnswer: "Elijah"
    },
    {
        question: "What is the first commandment in the Ten Commandments?",
        choices: ["You shall have no other gods before me", "Honor your father and mother", "You shall not murder", "You shall not steal"],
        correctAnswer: "You shall have no other gods before me"
    },
    {
        question: "Who was the father of John the Baptist?",
        choices: ["Zechariah", "Simeon", "Joseph", "Elisabeth"],
        correctAnswer: "Zechariah"
    },
    {
        question: "Which king built the first temple in Jerusalem?",
        choices: ["Solomon", "David", "Hezekiah", "Josiah"],
        correctAnswer: "Solomon"
    },
    {
        question: "Who wrote the book of Acts in the New Testament?",
        choices: ["Luke", "Paul", "John", "Mark"],
        correctAnswer: "Luke"
    },
    {
        question: "What did Jesus turn water into during the wedding at Cana?",
        choices: ["Wine", "Milk", "Juice", "Oil"],
        correctAnswer: "Wine"
    },
    {
        question: "Who was the first high priest of Israel?",
        choices: ["Aaron", "Eli", "Samuel", "Moses"],
        correctAnswer: "Aaron"
    },
    {
        question: "What is the fruit of the Spirit mentioned in the New Testament?",
        choices: ["Love, joy, peace", "Patience, kindness, goodness", "Faithfulness, gentleness, self-control", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Who was the son of David known for his wisdom?",
        choices: ["Solomon", "Absalom", "Rehoboam", "Adonijah"],
        correctAnswer: "Solomon"
    },
    // Add more questions as needed
];

export default questions;