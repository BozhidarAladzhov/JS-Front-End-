function focused() {
    const sections = Array.from(document.getElementsByTagName("input"));

    for (const section of sections) {
        section.addEventListener('focus', onFocus);
        section.addEventListener('blur', onBlur);
    }


    function onFocus (e){
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.add("focused");
    }

    function onBlur (e){
        const divParentElement = e.currentTarget.parentNode;
        divParentElement.classList.remove("focused");
    }
}