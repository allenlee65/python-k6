
# Python-K6

Run k6 scripts via python

## Running Tests

To run tests directly, run the following command

```bash
  k6 run script.js
```

To run tests in k8s, run the following command

```bash
  kubectl apply -f k6.yaml
```

To run tests via python locally, run the following command

```bash
  python3 run_k6.py
```

To run tests via k6 cloud, run the following command

```bash
  k6 cloud login --token $TOKEN
  k6 cloud script.js
```

![alt text](<Screenshot From 2025-08-06 08-54-05.png>)