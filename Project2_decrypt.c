#include <stdio.h>

int main() {
    char fname[50], ch;
    FILE *fps, *fpt;

    printf("Enter Filename: ");
    scanf("%s", fname);

    fps = fopen(fname, "w");
    fpt = fopen("temp.txt", "r");

    if (fps == NULL || fpt == NULL) {
        printf("File error!");
        return 0;
    }

    ch = fgetc(fpt);
    while (ch != EOF) {
        ch = ch - 100;
        fputc(ch, fps);
        ch = fgetc(fpt);
    }

    fclose(fps);
    fclose(fpt);

    printf("File Decrypted Successfully!");
    return 0;
}
