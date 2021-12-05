const SET_INFO = 'SET_INFO';

const initialState = {
        description: "Ответственный, внимательный и усидчивый. В коллективе всегда нахожу общий язык и умею ладить с людьми. " +
            "На протяжении года интересуюсь web разработкой, учу JavaScript, его библиотеки и фреймворки (преимущественно React). " +
            "Знаю английский на уровне intermediate, что позволяет читать документацию в оригинале и искать информацию " +
            "на зарубежных ресурсах. Ощущаю желание самореализации в сфере IT, готов активно обучаться и получать новые навыки.",
        technologies: [
            {
                name: 'React',
                icon: ''
            },
            {
                name: 'CSS',
                icon: ''
            },
            {
                name: 'HTML',
                icon: ''
            }
        ],
        keyskills: [
            "Ответственность", "Усидчивость", "Усидчивость", "Усидчивость"
        ],
        languages: []
};

const infoReduser = (state = initialState, action) => {
    return state
}

export default infoReduser;