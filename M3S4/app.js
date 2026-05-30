const API_URL = "http://localhost:3000/productos";

let products = JSON.parse(
    localStorage.getItem("products")
) || [];

const form = document.getElementById("productForm");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const productList = document.getElementById("productList");
const message = document.getElementById("message");
const syncBtn = document.getElementById("syncBtn");

renderProducts();

function showMessage(text, type){

    message.textContent = text;
    message.className = type;

    setTimeout(() => {
        message.textContent = "";
        message.className = "";
    },3000);

}

function saveLocalStorage(){

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}

function renderProducts(){

    productList.innerHTML = "";

    products.forEach(product => {

        const li = document.createElement("li");
        li.classList.add("product");

        li.innerHTML = `
            <div class="product-info">
                <strong>${product.name}</strong>
                <span>$${product.price}</span>
            </div>

            <div class="product-buttons">
                <button class="edit">
                    Editar
                </button>

                <button class="delete">
                    Eliminar
                </button>
            </div>
        `;

        const editBtn = li.querySelector(".edit");
        const deleteBtn = li.querySelector(".delete");

        editBtn.addEventListener("click", () => {
            editProduct(product.id);
        });

        deleteBtn.addEventListener("click", () => {
            deleteProduct(product.id);
        });

        productList.appendChild(li);

    });

}

form.addEventListener("submit", async e => {

    e.preventDefault();

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if(!name || price <= 0){

        showMessage(
            "Datos inválidos",
            "error"
        );

        return;
    }

    const newProduct = {
        id: Date.now(),
        name,
        price
    };

    products.push(newProduct);

    saveLocalStorage();
    renderProducts();

    await createProductAPI(newProduct);

    form.reset();

    showMessage(
        "Producto agregado",
        "success"
    );

});

async function createProductAPI(product){

    try{

        const response = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        });

        const data = await response.json();

        console.log("POST:", data);

    }catch(error){

        console.error(error);

    }

}

async function getProductsAPI(){

    try{

        const response = await fetch(API_URL);

        const data = await response.json();

        console.log("GET:", data);

        return data;

    }catch(error){

        console.error(error);

    }

}

async function updateProductAPI(product){

    try{

        const response = await fetch(
            `${API_URL}/${product.id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product)
            }
        );

        const data = await response.json();

        console.log("PUT:", data);

    }catch(error){

        console.error(error);

    }

}

async function deleteProductAPI(id){

    try{

        await fetch(
            `${API_URL}/${id}`,
            {
                method:"DELETE"
            }
        );

        console.log("DELETE:", id);

    }catch(error){

        console.error(error);

    }

}

async function editProduct(id){

    const product = products.find(
        p => p.id === id
    );

    const newName = prompt(
        "Nuevo nombre",
        product.name
    );

    const newPrice = prompt(
        "Nuevo precio",
        product.price
    );

    if(
        !newName ||
        Number(newPrice) <= 0
    ){
        return;
    }

    product.name = newName;
    product.price = Number(newPrice);

    saveLocalStorage();
    renderProducts();

    await updateProductAPI(product);

    showMessage(
        "Producto actualizado",
        "success"
    );

}

async function deleteProduct(id){

    products = products.filter(
        product => product.id !== id
    );

    saveLocalStorage();
    renderProducts();

    await deleteProductAPI(id);

    showMessage(
        "Producto eliminado",
        "success"
    );

}

syncBtn.addEventListener("click", async () => {

    const apiProducts =
        await getProductsAPI();

    if(apiProducts){

        products = apiProducts;

        saveLocalStorage();

        renderProducts();

        showMessage(
            "Datos sincronizados",
            "success"
        );

    }

});