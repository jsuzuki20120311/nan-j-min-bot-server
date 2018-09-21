# メモ

## よく使う気がするPython周りのコマンド

現在の環境にインストールされているパッケージ一覧表示

```bash
$ pip list
```


## pyenvとcondaを共存させている場合のpython切替コマンド例

```bash
$ /Users/suzukijun/.pyenv/versions/miniconda3-4.3.11/bin/activate bot-model
```


## condaでの環境再構築

```bash
$ conda env create --file bot-model.yaml
```

## condaでの仮想環境を確認

```bash
$ conda info -e
```

### 仮想環境の書き出し

```bash
$ conda env export -n yome > myenv.yaml
```

### 仮想環境再構築

```bash
$ conda create -n py27 python=2.7 anaconda
```
