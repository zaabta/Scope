const textInput = document.querySelector("#text-input");
const btn = document.querySelector("#btn");
const notes = document.querySelector(".note");
const todoes = [];

const displayNote = (arr) => {
    notes.innerHTML = ""
  arr.map((item) => {
    notes.innerHTML += `
        <li 
        id="${item.id}"
        style="background-color: rgb(${item.color.red},${item.color.green},${ item.color.blue});
        color: ${isLight(item.color) ? "black" : "white"};
        "
        >
        <p style="
        text-decoration : ${item.isDone ? "line-through": "none"};
        ">${item.content}</p>
                <div class="todo-btns">
                    <i class="fa-solid fa-check" onClick="check(${item.id})"></i>
                    <i class="fa-solid fa-trash" onClick="remove(${item.id})"></i>
                </div>
            </li>
    `
  });
};

btn.addEventListener("click", () => {
  todoes.push({
    id: Math.floor(Math.random() * 100000),
    content: textInput.value,
    isDone: false,
    color: generateRandomColor()
  });
  textInput.value = "";
  displayNote(todoes);
});


const generateRandomColor = () => ({
    red: Math.random() * 256,
    green: Math.random() * 256,
    blue: Math.random() * 256,
})

const  isLight = color => ((color.red * 299) + (color.green * 587) + (color.blue * 114)) / 1000 > 155


const check = (id) => {
    const index = todoes.findIndex(todo => todo.id == id)
    todoes[index].isDone =  !todoes[index].isDone
    displayNote(todoes);
}

const remove = (id) => {
    const index = todoes.findIndex(todo => todo.id == id)
    todoes.splice(index, 1)
    displayNote(todoes);
}