import requests

body = {
    "products": [
        {
            "product_id": 10232,
            "name": "shampoo",
            "quantity": 3,
            "price": 1.20,
            "description": "premium shampoo"
        },
        {
            "product_id": 12,
            "name": "deoderant",
            "quantity": 5,
            "price": 3.2,
            "description": "stinky bad"
        },
    ]
}

response = requests.post("http://localhost:8080/product", json=body)

print(response.status_code)
print(response.content)


body = {
    "products": [
        {
            "product_id": 12345,
            "name": "toilet paper",
            "quantity": 100,
            "price": 1.20,
            "description": "wipey wipey"
        },
        {
            "product_id": 100,
            "name": "razor",
            "quantity": 1,
            "price": 3.2,
            "description": """
            big wall of text
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus euismod est vitae aliquam. Donec ut porttitor erat. Nullam quis hendrerit quam, id dignissim quam. Nunc venenatis quam tortor, eget vulputate nisl convallis sit amet. Suspendisse fringilla urna sem, id mollis sem congue posuere. Phasellus lacinia ac ipsum et facilisis. Nam volutpat posuere enim a ullamcorper. Integer porttitor, nisl eu convallis molestie, enim odio finibus sapien, a vulputate diam augue in ante. Proin vitae neque congue, pulvinar lacus eget, rutrum eros. Nulla non porttitor libero, rutrum cursus nibh. Cras facilisis congue aliquam. Aenean ultricies non nisi ac lobortis. Nam et sollicitudin velit. Phasellus cursus fringilla purus id cursus. Morbi in risus diam. Suspendisse pulvinar pulvinar efficitur.

Integer finibus elit felis, a pulvinar mauris porta a. Phasellus rhoncus interdum turpis eu feugiat. Curabitur euismod, eros nec tincidunt hendrerit, nunc urna posuere quam, pharetra bibendum leo purus ut nisl. Donec non mi facilisis, pellentesque ipsum vel, congue tellus. Integer eget finibus leo, eu fermentum orci. Curabitur suscipit elit id justo sollicitudin tempor. Pellentesque aliquam lacinia felis, at luctus metus lobortis ut. Nullam eu porta nunc, id tempor mi. Sed id pretium dui. Aliquam non tristique nulla.

Proin vestibulum ligula non velit laoreet tempor. Sed elementum pellentesque ligula hendrerit luctus. Proin quis auctor ex, eu aliquam ipsum. Ut viverra risus non turpis feugiat, porta rutrum augue convallis. Curabitur nibh enim, aliquam id purus in, lobortis aliquam sem. Quisque dictum porta ante, in venenatis urna congue in. Fusce quis ipsum in ex dictum tincidunt. Pellentesque non tortor quam. Morbi in orci non erat imperdiet porttitor et et urna. Maecenas efficitur vitae felis non efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tellus leo, volutpat ut dictum non, tempor ac nisl.
            """
        },
    ]
}

response = requests.post("http://localhost:8080/product", json=body)

print(response.status_code)
print(response.content)



