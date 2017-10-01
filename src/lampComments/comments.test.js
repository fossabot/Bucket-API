const TEST = require('../baseTest')

const createDataCorrect = {
  lamp_id: 'TEST01',
  comment_content: '我不會用'
}

const createDataWrong = {
  lamp_id: 'TEST01'
}

const updateData = {
  lamp_id: 'TEST01',
  comment_content: '我真的不會用'
}

const Data = {createDataCorrect, createDataWrong, updateData}

const Item = {name: 'comments', id: 'comment_id'}

TEST(Item, Data)
