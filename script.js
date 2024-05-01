var students = [];

function ft_init()
{
	document.getElementById("button_1").innerHTML = "Add Student";
	document.getElementById("button_2").innerHTML = "Show students";
}
function ft_remove_value(elem)
{
	elem.value = "";
	elem.onfocus = null;
}

function ft_add()
{
	var input;
	var target;

	input = document.createElement("input");
	input.value = "Student Name";
	input.type = "text";
	input.onfocus = function() {
		is_focused = 1;
		ft_remove_value(this)};
	target = document.getElementById("div_1").appendChild(input);
	document.getElementById("button_1").innerHTML = "Save Student";
		document.getElementById("button_1").onclick = function () {
			ft_save(input);
}
}

function ft_save(elem)
{
	pattern = /[^a-z ]/i
	not_space = /[^ ]/
	start_space = /^ /
	var name = elem.value;
	if (!pattern.test(name) && not_space.test(name) && !start_space.test(name) && name != "Student Name" && name != "Wrong Name")
	{
		students.push(name);
		var div = document.getElementById("div_1");
		div.removeChild(elem);
		document.getElementById("button_1").innerHTML = "Add Student"
		document.getElementById("button_1").onclick = ft_add;
		if (document.getElementById("button_2").innerHTML == "Hide Students")
		{
			var all_students = "";
			if (students.length > 0)
			{
				var index = 0;
				while(index < students.length)
				{
					all_students = all_students + students[index];
					if (index != (students.length - 1))
						all_students = all_students + '<br>'
					index++;
				}
			}
		else
			all_students = "There is no student"
		document.getElementById("list").innerHTML = all_students;
		}
	}
	else
	{
		elem.value = "Wrong Name"
		elem.onfocus = function() {
			ft_remove_value(this)};
	}
}
function ft_show() {
	var all_students = "";
	if (students.length > 0)
	{
		var index = 0;
		while(index < students.length)
		{
			all_students = all_students + students[index];
			if (index != (students.length - 1))
				all_students = all_students + '<br>'
			index++;
		}
	}
	else
		all_students = "There is no student"
	var table = document.createElement('p');
	table.innerHTML = all_students;
	table.id = "list"
	document.getElementById("div_2").appendChild(table);
	document.getElementById("button_2").innerHTML = "Hide Students"
	document.getElementById("button_2").onclick = function (){
		ft_remove_table(table);
	}
}
function ft_remove_table(elem)
{
	document.getElementById("div_2").removeChild(elem);
	document.getElementById("button_2").innerHTML = "Show students";
	document.getElementById("button_2").onclick = ft_show;
}