Running:

```shell
npm install

# run version with allowRendererProcessReuse = true
npm run reuse

# run version with allowRendererProcessReuse = false
npm run no-reuse
```

To test the difference in behavior, reload the page after starting on both versions. You should get the following results.

- With **`npm run reuse`**:

![with `npm run reuse`](reuse.png)

- With **`npm run no-reuse`**:

![with `npm run no-reuse`](no-reuse.png)

Notice how the `no-reuse` version blocks iframe interaction due to CORS violation on the second navigation (i.e. after reloading the page).