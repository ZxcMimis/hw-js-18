export const creatStudentsList = (students) =>
    student
        .map(() => `<li id="${student.id}" class="item">
<p class="id">${student.id}</p>
<h2 class="name">${student.name}</</h2>
<p class="years">${student.age}</</p>
<p class="course">${student.course}</</p>
<p class="skills">${student.skills}</</p>
<a href="${student.email}</" type="email" class="email">${student.email}</</a>


</li>`).join("")